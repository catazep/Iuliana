import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public click(option: "phone" | "email") {
    switch (option) {
      case "phone":
        // Open WhatsApp with the phone number
        const phoneNumber = "40723262262";
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
        break;
      case "email":
        // Open default email client
        const emailAddress = "iulianalazar76@yahoo.com";
        const mailtoUrl = `mailto:${emailAddress}`;
        window.open(mailtoUrl, "_blank");
        break;
      default:
        console.warn("Unknown option:", option);
    }
  }
}
