export const simulatorContext = () => {
    return {
        selectedType: 1,
        pickerSection: true,
        interestRate: 0,
        switchType(e: string) {
            this.selectedType = parseInt(e);
            this.pickerSection = false;
        },
        switchBack() {
            this.pickerSection = true;
        }
    }
};