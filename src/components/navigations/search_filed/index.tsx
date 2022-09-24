import { useRef, useState } from "react";
import MainButton from "../../buttons/main_button";
import NavButton from "../../buttons/nav_button";
import IconProvider from "../../providers/icon_provider";
import Container from "./style";

const SearchFiled = () => {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    // @ts-ignore
    inputRef.current.value = "";
  };

  const [show, setShow] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) setShow(true);
    else setShow(false);
  };

  const [focus, setFocus] = useState(false);
  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setFocus(true);
    else setFocus(false);
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
          ref={inputRef}
          onChange={(event) => handleChange(event)}
          onFocus={(event) => handleFocus(event)}
          type="text"
          placeholder="Поиск"
        />
        {show && (
          <div className="close-container">
            <MainButton
              icon="CloseCircleBoldIcon"
              onClick={() => onButtonClick()}
              options={{
                iconOptions: {
                  color: "dynamic_light_gray60",
                },
                padding: 1,
              }}
            />
          </div>
        )}
      </div>

      {focus && (
        <NavButton
          text="Отменить"
          onClick={() => "sad"}
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
