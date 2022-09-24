export type SearchInputProps =
  | {
      value: string;
      setValue: (state: string) => void;
      isSearching: boolean;
      setSearching: (state: boolean) => void;
      placeholder: string;
      onPress?: never;
    }
  | {
      value?: never;
      setValue?: never;
      isSearching?: never;
      setSearching?: never;
      placeholder: string;
      onPress: () => void;
    };
