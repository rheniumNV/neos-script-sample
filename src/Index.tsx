import { Slot } from "neos-script";
import { Grabbable } from "neos-script/components/Transform/Interaction/Grabbable";
import { BoxMesh } from "neos-script/components/Assets/Procedural Meshes/BoxMesh";
import { BoxCollider } from "neos-script/components/Physics/Colliders/BoxCollider";
import { MeshRenderer } from "neos-script/components/Rendering/MeshRenderer";
import { DynamicVariableSpace } from "neos-script/components/Data/Dynamic/DynamicVariableSpace";
import { v4 as uuidv4 } from "uuid";

export function NeosObject() {
  const meshId = uuidv4();
  return (
    <Slot
      name="Box"
      components={[
        <Grabbable />,
        <BoxMesh id={meshId} />,
        <MeshRenderer Mesh={meshId} />,
        <BoxCollider />,
        <DynamicVariableSpace />,
      ]}
    />
  );
}
