import { member } from "neos-script";
import { Slot } from "neos-script/core/Slot";
import { RectTransform } from "neos-script/components/UIX/RectTransform";
import { VerticalLayout } from "neos-script/components/UIX/Layout/VerticalLayout";

function splitPadding(
  Padding:
    | number
    | [number]
    | [number, number]
    | [number, number, number, number]
) {
  let PaddingTop = 0;
  let PaddingLeft = 0;
  let PaddingRight = 0;
  let PaddingBottom = 0;
  if (typeof Padding === "number") {
    PaddingTop = Padding;
    PaddingLeft = Padding;
    PaddingRight = Padding;
    PaddingBottom = Padding;
  } else {
    switch (Padding.length) {
      case 1:
        PaddingTop = Padding[0];
        PaddingLeft = Padding[0];
        PaddingRight = Padding[0];
        PaddingBottom = Padding[0];
        break;
      case 2:
        PaddingTop = Padding[0];
        PaddingLeft = Padding[1];
        PaddingRight = Padding[1];
        PaddingBottom = Padding[0];
        break;
      case 4:
        PaddingTop = Padding[0];
        PaddingLeft = Padding[3];
        PaddingRight = Padding[1];
        PaddingBottom = Padding[2];
        break;
    }
  }
  return [PaddingTop, PaddingLeft, PaddingRight, PaddingBottom];
}

export function UIXPadding({
  Name = "Padding",
  Padding = 10,
  PaddingTop,
  PaddingLeft,
  PaddingRight,
  PaddingBottom,
  children,
}: {
  Name?: string;
  Padding?:
    | number
    | [number]
    | [number, number]
    | [number, number, number, number];
  PaddingTop?: number;
  PaddingLeft?: number;
  PaddingRight?: number;
  PaddingBottom?: number;
  children?: JSX.IntrinsicElements[];
}) {
  const padding = splitPadding(Padding);
  return (
    <Slot
      name={Name}
      components={[
        VerticalLayout({
          PaddingTop: PaddingTop ?? padding[0],
          PaddingLeft: PaddingLeft ?? padding[1],
          PaddingRight: PaddingRight ?? padding[2],
          PaddingBottom: PaddingBottom ?? padding[3],
        }),
        RectTransform({}),
      ]}
    >
      {children}
    </Slot>
  );
}
