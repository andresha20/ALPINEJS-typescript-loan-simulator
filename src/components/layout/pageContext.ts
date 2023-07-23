export const PageContext = () => {
    return {
        darkTheme: true,
        switchTheme() {
            this.darkTheme = !this.darkTheme;
            document.documentElement.setAttribute("class", this.darkTheme ? 'dark' : '');
        },
    }
};