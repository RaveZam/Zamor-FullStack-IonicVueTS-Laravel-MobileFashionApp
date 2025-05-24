<template>
  <ion-page>
    <ion-content>
      <Header />
      <div
        class="h-[90%] flex flex-col p-8 font-latoGoogle space-y-4 overflow-y-auto"
      >
        <h1 class="text-2xl font-bold mb-2">Terms and Policies</h1>

        <p>
          <strong>1. Introduction</strong><br />
          Welcome to Zamor! By using our platform, you agree to the following
          terms and policies. Please read them carefully.
        </p>

        <p>
          <strong>2. User Accounts</strong><br />
          - You must be at least 13 years old to register.<br />
          - You are responsible for keeping your account secure.<br />
          - Providing false information may result in account suspension.
        </p>

        <p>
          <strong>3. Purchases & Payments</strong><br />
          - Prices are listed in your local currency where applicable.<br />
          - Payments are processed securely via trusted providers.<br />
          - Orders are confirmed after successful payment.
        </p>

        <p>
          <strong>4. Shipping & Delivery</strong><br />
          - Delivery times vary by location.<br />
          - We aim to deliver within the estimated timeframe.<br />
          - Delays outside our control may occur.
        </p>

        <p>
          <strong>5. Returns & Refunds</strong><br />
          - Items can be returned within 7 days in original condition.<br />
          - Refunds are processed after approval and may take up to 7 business
          days.
        </p>

        <p>
          <strong>6. Privacy Policy</strong><br />
          - We collect minimal data necessary for service.<br />
          - Your data is never sold or misused.<br />
          - Learn more in our full Privacy Policy.
        </p>

        <p>
          <strong>7. Intellectual Property</strong><br />
          All content (logos, images, designs) is owned by Zamor or its
          partners. Unauthorized use is prohibited.
        </p>

        <p>
          <strong>8. Prohibited Activities</strong><br />
          You may not:<br />
          - Use the platform for illegal purposes<br />
          - Mislead or harm other users<br />
          - Disrupt the app or website's functionality
        </p>

        <p>
          <strong>9. Changes to Terms</strong><br />
          We may update these terms anytime. Continued use means you accept
          changes.
        </p>

        <p>
          <strong>10. Contact Us</strong><br />
          For support or inquiries, contact: <br />
          📧
          <a
            href="mailto:support@zamorfashion.com"
            class="text-blue-600 underline"
            >support@zamorfashion.com</a
          >
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import { IonPage, IonContent } from "@ionic/vue";
</script>
