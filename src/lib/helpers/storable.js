import { get, writable } from 'svelte/store';

/**
 * @param {any} data
 */
export function storable(data) {
	const store = writable(data);
	const { subscribe, set, update } = store;
	const isBrowser = typeof window !== 'undefined';

	isBrowser && localStorage.storable && set(JSON.parse(localStorage.storable));

	return {
		subscribe,
		set: (/** @type {any} */ n) => {
			if (isBrowser) {
				localStorage.storable = JSON.stringify(n);
			}
			set(n);
		},
		update: (/** @type {(arg0: any) => any} */ cb) => {
			const updatedStore = cb(get(store));

			if (isBrowser) {
				localStorage.storable = JSON.stringify(updatedStore);
			}
			set(updatedStore);
		}
	};
}
