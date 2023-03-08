import { member } from "neos-script";
import { Slot } from "neos-script/core/Slot";
import { RectTransform } from "neos-script/components/UIX/RectTransform";
import { VerticalLayout } from "neos-script/components/UIX/Layout/VerticalLayout";
import { Image } from "neos-script/components/UIX/Graphics/Image";
import { Mask } from "neos-script/components/UIX/Graphics/Mask";
import { ScrollRect } from "neos-script/components/UIX/Interaction/ScrollRect";
import { ContentSizeFitter } from "neos-script/components/UIX/Layout/ContentSizeFitter";
import { LayoutElement } from "neos-script/components/UIX/Layout/LayoutElement";

export function UIXScrollArea({
  Name = "ScrollArea",
  PaddingTop,
  PaddingLeft,
  PaddingRight,
  PaddingBottom,
  Spacing,
  HorizontalAlign,
  VerticalAlign,
  ForceExpandHeight,
  ForceExpandWidth,
  VerticalFit = "MinSize",
  HorizontalFit,
  children,
}: {
  Name?: string;
  PaddingTop?: member<number>;
  PaddingLeft?: member<number>;
  PaddingRight?: member<number>;
  PaddingBottom?: member<number>;
  Spacing?: member<number>;
  HorizontalAlign?: member<"Left" | "Center" | "Right">;
  VerticalAlign?: member<"Top" | "Middle" | "Bottom">;
  VerticalFit?: member<
    "Disable" | "MinSize" | "PreferredSize" | "FlexibleSize"
  >;
  HorizontalFit?: member<
    "Disable" | "MinSize" | "PreferredSize" | "FlexibleSize"
  >;
  ForceExpandHeight?: member<boolean>;
  ForceExpandWidth?: member<boolean>;
  children?: JSX.IntrinsicElements[];
}) {
  return (
    <Slot name={Name} components={[Image({}), Mask({}), RectTransform({})]}>
      <Slot
        name="Content"
        components={[
          ScrollRect({}),
          VerticalLayout({}),
          RectTransform({}),
          ContentSizeFitter({ VerticalFit, HorizontalFit }),
        ]}
      >
        <Slot
          components={[
            RectTransform({}),
            LayoutElement({}),
            VerticalLayout({
              PaddingTop,
              PaddingLeft,
              PaddingRight,
              PaddingBottom,
              Spacing,
              HorizontalAlign,
              VerticalAlign,
              ForceExpandHeight,
              ForceExpandWidth,
            }),
          ]}
        >
          {children}
        </Slot>
      </Slot>
    </Slot>
  );
}
