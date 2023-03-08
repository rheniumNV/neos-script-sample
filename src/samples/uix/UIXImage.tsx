import { member } from "neos-script";
import { Slot } from "neos-script/core/Slot";
import { Image } from "neos-script/components/UIX/Graphics/Image";
import { RectTransform } from "neos-script/components/UIX/RectTransform";

export function UIXImage({
  Name = "Image",
  Tint = [1, 1, 1, 1],
  Material,
  Sprite,
  children,
  components,
}: {
  Name?: string;
  Tint?: member<[number, number, number, number]>;
  Material?: { id: string; assets: any[] };
  Sprite?: { id: string; assets: any[] };
  children?: JSX.IntrinsicElements[];
  components?: JSX.IntrinsicElements[];
}) {
  return (
    <Slot
      name={Name}
      components={[
        Image({ Tint, Material: Material?.id, Sprite: Sprite?.id }),
        RectTransform({}),
        ...(components ?? []),
      ]}
      assets={[...(Material?.assets ?? []), ...(Sprite?.assets ?? [])]}
    >
      {children}
    </Slot>
  );
}
