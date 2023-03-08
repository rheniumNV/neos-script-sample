import { v4 as uuidv4 } from "uuid";
import { member } from "neos-script";
import { Text } from "neos-script/components/UIX/Graphics/Text";
import { Slot } from "neos-script/core/Slot";
import { CommonFont } from "../assets/CommonFont";
import { CommonUiTextUnlitMaterial } from "../assets/CommonUiTextUnlitMaterial";
import { RectTransform } from "neos-script/components/UIX/RectTransform";

export function UIXText({
  Name = "Text",
  Content,
  Color,
  Size,
  ParseRichText,
  NullContent,
  HorizontalAutoSize,
  VerticalAutoSize,
  AutoSizeMin,
  AutoSizeMax,
  LineHeight,
  HorizontalAlign,
  VerticalAlign,
}: {
  Name?: string;
  Content?: member<string>;
  Color?: member<[number, number, number, number]>;
  Size?: member<number>;
  ParseRichText?: member<boolean>;
  NullContent?: member<string>;
  HorizontalAutoSize?: member<boolean>;
  VerticalAutoSize?: member<boolean>;
  AutoSizeMin?: member<number>;
  AutoSizeMax?: member<number>;
  LineHeight?: member<number>;
  HorizontalAlign?: member<"Left" | "Center" | "Right">;
  VerticalAlign?: member<"Top" | "Middle" | "Bottom">;
}) {
  return (
    <Slot
      name={Name}
      components={[
        Text({
          Content,
          Font: CommonFont.id,
          Color,
          Size,
          ParseRichText,
          NullContent,
          HorizontalAutoSize,
          VerticalAutoSize,
          AutoSizeMin,
          AutoSizeMax,
          LineHeight,
          VerticalAlign,
          HorizontalAlign,
          Materials: [{ ID: uuidv4(), Data: CommonUiTextUnlitMaterial.id }],
        }),
        RectTransform({}),
      ]}
      assets={[...CommonFont.assets, ...CommonUiTextUnlitMaterial.assets]}
    />
  );
}
