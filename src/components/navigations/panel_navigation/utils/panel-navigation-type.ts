import { AllIconsType } from "../../../resources/all_icons/allIcons";

export type PanelNavigationProps = {
  header: {
    title: string;
    button?: {
      btnText: string;
      btnIcon: AllIconsType;
    };
  };
  searchField: {
    value: string;
    setValue: (state: string) => void;
    isSearching: boolean;
    setSearching: (state: boolean) => void;
  };
};
