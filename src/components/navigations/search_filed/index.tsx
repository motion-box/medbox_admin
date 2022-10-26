import { useRef } from "react";
import NavButton from "../../buttons/nav_button";
import IconProvider from "../../providers/icon_provider";
import Container from "./style";
import { SearchInputProps } from "./utils/search-filed-type";

type Iprops = Required<Omit<SearchInputProps, "onClick">>;

const SearchFiled = (props: Iprops) => {
  const { value, setValue, isSearching, setSearching } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const inputControl = (text: "clear" | "cancel") => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    setValue("");
    if (text == "cancel") {
      inputRef.current.blur();
      setValue("");
      setSearching(false);
    }
  };

  return (
    <Container>
      <div className="input-container">
        <div className="search-container">
          <IconProvider
            icon="SearchLinearIcon"
            color="dynamic_light_gray60"
            width={18}
            height={18}
          />
        </div>
        <input
          type="text"
          placeholder="Поиск"
          ref={inputRef}
          onChange={(e) => setValue(e.currentTarget.value)}
          onFocus={() => setSearching(true)}
        />
        {value?.length > 0 ? (
          <button
            className="close-container"
            onClick={() => inputControl("clear")}
          >
            <IconProvider
              icon="CloseCircleBoldIcon"
              color="dynamic_light_gray60"
            />
          </button>
        ) : null}
      </div>
      {isSearching && (
        <NavButton
          text="Отменить"
          onClick={() => inputControl("cancel")}
          options={{
            textOptions: {
              fontSize: 17,
              fontWeight: 400,
              color: "static_blue",
            },
          }}
        />
      )}
    </Container>
  );
};

export default SearchFiled;
