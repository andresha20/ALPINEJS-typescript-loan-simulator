export const simulatorContext = () => {
    return {
        selectedType: 1,
        pickerSection: true,
        switchType(e: Event) {
            if (e.target instanceof Element) {
                this.selectedType = parseInt(e?.target?.getAttribute("id") || "1");
            }
            this.pickerSection = false;
        },
        switchBack() {
            this.pickerSection = false;
        }
    }
};