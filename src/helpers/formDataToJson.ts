export default function formDataToJson(formData: FormData) {
  let object: any = {}
  formData.forEach(function (value: FormDataEntryValue, key: string): void {
    object[key] = value || "0";
  });

  return object;
}