import NavbarAction from "../components/NavbarAction";
import FormAction from "../components/FormAction";

export default function FormLayout() {
  return (
    <>
      <NavbarAction />
      <div className="formLayout">
        <FormAction />
      </div>
    </>
  );
}
