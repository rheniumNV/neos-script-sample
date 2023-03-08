import { v4 as uuidv4 } from "uuid";
import { Slot } from "neos-script";
import { Grabbable } from "neos-script/components/Transform/Interaction/Grabbable";
import { BoxMesh } from "neos-script/components/Assets/Procedural Meshes/BoxMesh";
import { BoxCollider } from "neos-script/components/Physics/Colliders/BoxCollider";
import { MeshRenderer } from "neos-script/components/Rendering/MeshRenderer";
import { ValueCopy_T } from "neos-script/components/Transform/Drivers/ValueCopy_T";
import { CommonPbsMetallic } from "./assets/CommonPbsMetallic";

export function Box({ position }: { position?: [number, number, number] }) {
  const boxMesh = BoxMesh({});
  const boxCollider = BoxCollider({});
  const boxSizeCopy = ValueCopy_T({
    type: {
      T: {
        name: "[BaseX.float3, BaseX]",
      },
    },
    Source: boxMesh.Data.Size.ID,
    Target: boxCollider.Data.Size.ID,
  });
  const meshRenderer = MeshRenderer({
    Mesh: boxMesh.Data.ID,
    Materials: [{ ID: uuidv4(), Data: CommonPbsMetallic.id }],
  });

  return (
    <Slot
      name="Box"
      position={position}
      components={[
        Grabbable({}),
        boxMesh,
        boxCollider,
        boxSizeCopy,
        meshRenderer,
      ]}
      assets={CommonPbsMetallic.assets}
    />
  );
}
