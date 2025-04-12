interface DropDownProp {
  role: string;
}

function DropDown({ role }: DropDownProp) {
  return (
    <select defaultValue={role}>
      <option value="customer">Customer</option>
      <option value="homeowner">Homeowner</option>
      <option value="admin">Admin</option>
    </select>
  );
}

export default DropDown;
