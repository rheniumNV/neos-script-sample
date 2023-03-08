import { member } from "neos-script";
import { Slot } from "neos-script/core/Slot";
import { Image } from "neos-script/components/UIX/Graphics/Image";
import { RectTransform } from "neos-script/components/UIX/RectTransform";
import { UIXImage } from "./UIXImage";
import { CommonUiUnlitMaterial } from "../assets/CommonUiUnilitMaterial";
import { CommonSpriteKadomaru } from "../assets/CommonSpriteKadomaru";

export function UIXBackground({
  Name = "BG",
  Tint = [1, 1, 1, 1],
  Material = CommonUiUnlitMaterial,
  Sprite = CommonSpriteKadomaru,
  children,
}: {
  Name?: string;
  Tint?: member<[number, number, number, number]>;
  Material?: { id: string; assets: any[] };
  Sprite?: { id: string; assets: any[] };
  children?: JSX.IntrinsicElements[];
}) {
  return (
    <Slot
      name={Name}
      components={[
        Image({ Tint, Material: Material?.id, Sprite: Sprite?.id }),
        RectTransform({}),
      ]}
      assets={[...(Material?.assets ?? []), ...(Sprite?.assets ?? [])]}
    >
      {children}
    </Slot>
  );
}
