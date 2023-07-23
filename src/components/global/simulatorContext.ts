export const simulatorContext = () => {
    return {
        selectedType: 1,
        pickerSection: true,
        switchType(e: string) {
            this.selectedType = parseInt(e);
            this.pickerSection = false;
        },
        switchBack() {
            this.pickerSection = true;
        }
    }
};