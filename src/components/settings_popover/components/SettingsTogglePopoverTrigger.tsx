import {Button, Popover} from "tamagui";
import SettingActive from "../../../assets/images/setting-active.svg";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import SettingInactive from "../../../assets/images/setting-inactive.svg";
import React from "react";
import {useAppSelector} from "../../../@types/redux_component.d";

export const SettingsTogglePopoverTrigger = () => {
    const {
        isToggledSetting
    } = useAppSelector(state => state.toggle);
    return (
        <Popover.Trigger asChild>
            <Button
                pressStyle={{}}
                backgroundColor={'rgba(0, 0, 0, 0)'}
                icon={
                    isToggledSetting ?
                        <SettingActive
                            width={responsiveWidth(3)}
                            height={responsiveHeight(3)}
                        />
                        :
                        <SettingInactive
                            width={responsiveWidth(3)}
                            height={responsiveHeight(3)}
                        />
                }
            />
        </Popover.Trigger>
    )
}