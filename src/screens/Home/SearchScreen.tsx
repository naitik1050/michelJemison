import React, { useState } from "react";
import { Stack, Text, XStack } from "tamagui";
import { colors } from "../../assets/colors";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SearchIcon from "../../assets/images/searchIcon.svg";
import Input from "../../components/TextInput";
import { wordData } from "../../utils/constants";

const SearchScreen = () => {
  const itemList = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
  ];
  const [filteredList, setFilteredList] = useState(wordData.pronouns);

  const [searchWords, setSearchWords] = useState("");
  const [word, setWord] = useState<object[]>([]);

  const setWordHandle = (data: object) => {
    setWord([...word, data]);
  };

  // const filterBySearch = (event) => {
  //   // Access input value
  //   // if (event === "") return null;
  //   // Create copy of item list
  //   var updatedList = [...wordData.pronouns];
  //   // Include all elements which includes the search query
  //   updatedList = updatedList.filter((item) => {
  //     return item.title.toLowerCase().indexOf(event.toLowerCase()) !== -1;
  //   });
  //   // Trigger render with updated values
  //   setSearchWords(event);

  //   setFilteredList(updatedList);
  // };
  return (
    <Stack
      flex={1}
      bg={colors.white}
      pt={responsiveHeight(5)}
      alignItems="center"
    >
      <XStack width={"95%"} als={"center"} jc={"space-between"}>
        {/*<Topbar selectedWord={word} setSelectedWord={setWord} />*/}
      </XStack>
      <Stack w={"50%"} mt={responsiveHeight(6)}>
        <Input
          Icon={SearchIcon}
          placeholder={"Type to search...."}
          value={searchWords}
          onChange={(val: string) => setSearchWords(val)}
          createSymbol={true}
        />
      </Stack>
      {/* <Stack>
        {filteredList.map((item, i) => {
          return (
            <Stack>
              <Text>{item}</Text>
            </Stack>
          );
        })}
      </Stack> */}
    </Stack>
  );
};

export default SearchScreen;
