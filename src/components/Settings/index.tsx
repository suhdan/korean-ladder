import * as Styled from "./styled";
import type { Props } from "./types";

export default function Settings({ settings, onChange }: Props) {
  return (
    <Styled.Settings>
      <form onChange={(e) => {}}>
        <label for="type">Type</label>
        <select name="type" id="type">
          <option value="instant">instant</option>
          <option value="normal">normal</option>
          <option value="suspense">suspense</option>
        </select>
      </form>
    </Styled.Settings>
  );
}
