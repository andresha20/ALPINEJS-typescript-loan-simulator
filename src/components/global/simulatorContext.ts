export const simulatorContext = () => {
    return {
        selectedType: 1,
        pickerSection: true,
        switchType(e: Event) {
            if(e.target !== e.currentTarget) return;
            if (e.target instanceof Element) {
                let target = e.target.getAttribute("id");
                if (target) {
                    this.selectedType = parseInt(target);
                }
            }
            this.pickerSection = false;
        },
        switchBack() {
            this.pickerSection = true;
        }
    }
};