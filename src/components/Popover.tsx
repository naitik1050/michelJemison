import React, { useState } from "react";
import { Stack, Popover, Button, YStack } from "tamagui";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SettingInactive from "../assets/images/setting-inactive.svg";
import { Separator } from "tamagui";
import { colors } from "../assets/colors";

const PopoverModal = ({ navigation }: any) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const options = [
    "Auto-completion",
    "User settings",
    "Edit page",
    "Hide buttons",
  ];
  return (
    <Stack w={"20%"} jc={"center"} ai={"center"}>
      <Popover size="$5" allowFlip placement="top">
        <Popover.Trigger
          onPress={() => setPopoverOpen(!popoverOpen)}
          asChild={true}
        >
          <Button bg={"transparent"}>
            <SettingInactive
              width={responsiveWidth(4)}
              height={responsiveHeight(4)}
            />
          </Button>
        </Popover.Trigger>

        <Popover.Content
          borderWidth={1}
          borderColor="$borderColor"
          enterStyle={{ x: 0, y: -10, opacity: 0 }}
          exitStyle={{ x: 0, y: -10, opacity: 0 }}
          x={0}
          y={0}
          opacity={1}
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          elevate
        >
          <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

          {options.map((item, i) => {
            return (
              <YStack als="flex-start" key={i}>
                <Popover.Close jc={"flex-start"} asChild>
                  <Button
                    pressStyle={{ bg: colors.lightgrey }}
                    bg={"transparent"}
                    p={0}
                    onPress={() => navigation.navigate("Setting")}
                  >
                    {item}
                  </Button>
                </Popover.Close>
                <Separator bw={1} />
              </YStack>
            );
          })}
        </Popover.Content>
      </Popover>
    </Stack>
  );
};

export default PopoverModal;
