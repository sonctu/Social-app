import { useStoreSelector } from "./store";

export const useUserSelector = () => useStoreSelector((state) => state.user);
export const useModalSelector = () => useStoreSelector((state) => state.modal);
