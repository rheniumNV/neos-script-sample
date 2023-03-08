import { Slot } from "neos-script";
import { Grabbable } from "neos-script/components/Transform/Interaction/Grabbable";
import { Box } from "./samples/Box";
import { UIXCanvas } from "./samples/uix/UIXCanvas";
import { UIXText } from "./samples/uix/UIXText";
import { UIXImage } from "./samples/uix/UIXImage";
import { CommonUiUnlitMaterial } from "./samples/assets/CommonUiUnilitMaterial";
import { UIXVertical } from "./samples/uix/UIXVertical";
import { UIXElement } from "./samples/uix/UIXElement";
import { UIXScrollArea } from "./samples/uix/UIXScrollArea";
import { UIXPadding } from "./samples/uix/UIXPadding";
import { UIXBackground } from "./samples/uix/UIXBackground";
import { Mask } from "neos-script/components/UIX/Graphics/Mask";
import { CommonSpriteKadomaru } from "./samples/assets/CommonSpriteKadomaru";

export function NeosObject() {
  return (
    <Slot
      name="Sample"
      components={[<Grabbable />]}
      assets={CommonUiUnlitMaterial.assets}
    >
      <Box position={[-1, 0, 0]} />

      <UIXCanvas Size={[1000, 1000]}>
        <UIXBackground Tint={[0.4, 0.4, 0.4, 1]} />
        <UIXPadding Padding={10}>
          <UIXImage Sprite={CommonSpriteKadomaru} components={[Mask({})]}>
            <UIXVertical ForceExpandHeight={false}>
              <UIXElement MinHeight={100}>
                <UIXImage Tint={[0.6, 0.6, 0.3, 1]} />
                <UIXText
                  Color={[0.8, 0.8, 0.8, 1]}
                  Content="neos-script"
                  VerticalAlign="Middle"
                  HorizontalAlign="Center"
                />
              </UIXElement>
              <UIXElement FlexibleHeight={1}>
                <UIXImage Tint={[0.3, 0.3, 0.3, 1]} />
                <UIXPadding Padding={30}>
                  <UIXScrollArea>
                    <UIXText
                      Color={[0.8, 0.8, 0.8, 1]}
                      Content={`neos-script is a Javascript library for creating Neos objects, allowing you to declaratively assemble objects using JSX, an extended Javascript syntax that can be written like HTML. This works especially well with UIX.

Note that it relies on the ability to read in JSON, which is deprecated by Neos officially, and may not be available in the future.`}
                    />
                  </UIXScrollArea>
                </UIXPadding>
              </UIXElement>
            </UIXVertical>
          </UIXImage>
        </UIXPadding>
      </UIXCanvas>
    </Slot>
  );
}
