class FirstPage {
  /**
   * @param {import('playwright').Page} page 
   */
  constructor(page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto('https://www.demoblaze.com/index.html');
	await this.page.click('#login2');
  }
  async enterLoginAndPassword() {
  await this.page.fill('#loginusername','Test5555555555');
  await this.page.fill('#loginpassword','Test5555555555');
  await this.page.click('#logInModal > div > div > div.modal-footer > button.btn.btn-primary');
  await this.page.waitForTimeout(5000);
  }
  async getLoginAttribute() {
  return this.page.getAttribute('#nameofuser', 'style');
  }
}
module.exports = { FirstPage };