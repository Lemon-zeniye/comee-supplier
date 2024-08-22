import React from "react";
import { Shell } from "../_components/shell";

function Featureslayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Shell>{children}</Shell>
    </div>
  );
}

export default Featureslayout;
