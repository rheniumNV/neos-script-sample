import { Slot } from "neos-script";
import { Grabbable } from "neos-script/components/Transform/Interaction/Grabbable";
import { CloudUserInfo } from "neos-script/components/Cloud/Indicators/CloudUserInfo";

export function NeosObject() {
  return (
    <Slot
      name="Root"
      components={[<Grabbable />, <CloudUserInfo UserId={"U-rhenium"} />]}
    >
      <Slot name="DV">
        <Slot name="Static" />
      </Slot>
      <Slot name="System" />
    </Slot>
  );
}
