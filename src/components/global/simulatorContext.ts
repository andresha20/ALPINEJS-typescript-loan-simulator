export const simulatorContext = () => {
    return {
        selectedType: 1,
        pickerSection: true,
        interestRate: 1.85,
        loan: '20,000,000',
        downPayment: 0,
        monthlyPaymentValue: 0,
        downPaymentValue: 0,
        monthlyPayment: 0,
        time: 12,
        switchType(value: string) {
            switch (value) {
                case '1':
                    this.interestRate = 1.15;
                    break;
                case '2':
                    this.interestRate = 1.90;
                    break;
                default:
                    this.interestRate = 1.85;
                    break;
            }
            this.selectedType = parseInt(value);
            return this.pickerSection = false;
        },
        switchBack() {
            return this.pickerSection = true;
        },
        updateValues() {
            const maxDownPayment = this.parseString(this.loan) - 10000000;
            this.downPayment = (this.downPaymentValue * maxDownPayment) / 100;
            const maxMonthlyPayment = this.calculateMonthlyPayment(0);
            this.monthlyPayment = this.calculateMonthlyPayment();
            this.monthlyPaymentValue = (this.monthlyPayment * 100) / maxMonthlyPayment;
            return false;
        },
        calculateMonthlyPayment(customDownPayment?: number) {
            const monthlyPayment = ((this.parseString(this.loan) - (customDownPayment ?? this.downPayment)) * (this.interestRate/100)) / (1 - Math.pow(1 + (this.interestRate/100), (~this.time + 1)));
            return monthlyPayment;
        },
        parseString(loan: string) {
            const num = parseFloat(loan.replaceAll(',', ''))
            return num;
        },
        setDownPayment() {
            const maxDownPayment = this.parseString(this.loan) - 10000000;
            if (this.parseString(this.loan) <= 10000000) {
                this.downPayment = 0;
            }
            const maxMonthlyPayment = this.calculateMonthlyPayment(0);
            this.downPayment = (this.downPaymentValue * maxDownPayment) / 100;
            this.monthlyPayment = this.calculateMonthlyPayment();
            this.monthlyPaymentValue = (this.monthlyPayment * 100) / maxMonthlyPayment;
            return false;
        },
        getLabel(value: number) {
            const label = isNaN(Math.round(value)) ? 0 : Math.round(value).toLocaleString('en-US');
            return `$${label}`;
        }
    }
};