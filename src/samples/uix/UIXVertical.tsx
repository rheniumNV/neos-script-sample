import { member } from "neos-script";
import { Slot } from "neos-script/core/Slot";
import { RectTransform } from "neos-script/components/UIX/RectTransform";
import { VerticalLayout } from "neos-script/components/UIX/Layout/VerticalLayout";

export function UIXVertical({
  Name = "Vert",
  PaddingTop,
  PaddingLeft,
  PaddingRight,
  PaddingBottom,
  Spacing,
  HorizontalAlign,
  VerticalAlign,
  ForceExpandHeight,
  ForceExpandWidth,
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
  ForceExpandHeight?: member<boolean>;
  ForceExpandWidth?: member<boolean>;
  children?: JSX.IntrinsicElements[];
}) {
  return (
    <Slot
      name={Name}
      components={[
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
        RectTransform({}),
      ]}
    >
      {children}
    </Slot>
  );
}
