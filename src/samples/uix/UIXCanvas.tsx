import { Slot } from "neos-script/core/Slot";
import { Canvas } from "neos-script/components/UIX/Canvas";
import { v4 as uuidv4 } from "uuid";
import { BoxCollider } from "neos-script/components/Physics/Colliders/BoxCollider";

export function UIXCanvas({
  Position,
  Size,
  children,
}: {
  Position?: [number, number, number];
  children?: JSX.Element[];
  Size: [number, number];
}) {
  const rootRectId = uuidv4();
  const boxCollider = BoxCollider({});
  return (
    <Slot
      id={rootRectId}
      name="Canvas"
      position={Position}
      scale={[0.001, 0.001, 0.001]}
      components={[
        Canvas({
          Size,
          _rootRect: rootRectId,
          Collider: boxCollider.Data.ID,
          _colliderSize: boxCollider.Data.Size.ID,
          _colliderOffset: boxCollider.Data.Offset.ID,
        }),
        boxCollider,
      ]}
    >
      {children}
    </Slot>
  );
}
