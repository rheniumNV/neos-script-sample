import { member } from "neos-script";
import { Slot } from "neos-script/core/Slot";
import { RectTransform } from "neos-script/components/UIX/RectTransform";
import { LayoutElement } from "neos-script/components/UIX/Layout/LayoutElement";

export function UIXElement({
  Name = "Element",
  MinWidth,
  PreferredWidth,
  FlexibleWidth,
  MinHeight,
  PreferredHeight,
  FlexibleHeight,
  children,
}: {
  Name?: string;
  MinWidth?: member<number>;
  PreferredWidth?: member<number>;
  FlexibleWidth?: member<number>;
  MinHeight?: member<number>;
  PreferredHeight?: member<number>;
  FlexibleHeight?: member<number>;
  children?: JSX.IntrinsicElements[];
}) {
  return (
    <Slot
      name={Name}
      components={[
        LayoutElement({
          MinWidth,
          PreferredWidth,
          FlexibleWidth,
          MinHeight,
          PreferredHeight,
          FlexibleHeight,
        }),
        RectTransform({}),
      ]}
    >
      {children}
    </Slot>
  );
}
