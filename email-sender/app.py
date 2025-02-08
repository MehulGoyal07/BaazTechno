import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SENDER_EMAIL = 'baaztechno@gmail.com'  
SENDER_PASSWORD = '' 

def read_email_ids(file_path):
    with open(file_path, 'r') as file:
        email_ids = file.read().splitlines()
    return email_ids

def send_email(subject, body, recipient_email):
    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = recipient_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'html'))

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls() 
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, recipient_email, msg.as_string())
        print(f"Email sent to {recipient_email}")
    except Exception as e:
        print(f"Failed to send email to {recipient_email}: {e}")
def main():
    email_file_path = 'emails.txt'

    subject = "Custom T-Shirt Printing for Your College Club!"
    body = """
<html>
<body>
    <p>Dear Sir/Ma'am,</p>
    <p>I hope this email finds you well!</p>
    <p>My name is Mehul Goyal, and I represent <strong>Baaztechno</strong>, a leading provider of professional web solutions for businesses and individuals looking to establish a strong online presence. Whether you're a startup, a small business, or an established enterprise, we offer tailored web solutions to meet your unique needs.</p>
    
    <p><strong>Our Services and Pricing:</strong></p>
    <ul>
        <li><strong>Basic Website:</strong> Perfect for small businesses or personal portfolios. Includes up to 5 pages, responsive design, and contact form. <strong>Starting at $299</strong>.</li>
        <li><strong>E-Commerce Website:</strong> Ideal for online stores. Includes product listings, shopping cart, payment gateway integration, and inventory management. <strong>Starting at $799</strong>.</li>
        <li><strong>Custom Web Application:</strong> Tailored solutions for businesses requiring advanced functionality, such as CRM, ERP, or custom dashboards. <strong>Starting at $1,500</strong>.</li>
        <li><strong>Website Redesign:</strong> Revamp your existing website with modern design, improved functionality, and better user experience. <strong>Starting at $499</strong>.</li>
        <li><strong>SEO and Digital Marketing:</strong> Boost your online visibility with our SEO, social media marketing, and PPC campaigns. <strong>Custom pricing based on requirements</strong>.</li>
    </ul>

    <p>Explore our portfolio and learn more about our services on our <a href="https://www.baaztechno.com">Website</a>.</p>

    <p><strong>Why Choose Baaztechno?</strong></p>
    <ul>
        <li>Expertise in delivering high-quality, user-friendly websites.</li>
        <li>Affordable pricing with no hidden costs.</li>
        <li>Timely delivery and dedicated support.</li>
        <li>Custom solutions tailored to your business goals.</li>
    </ul>

    <p>We’d love to help you take your business to the next level with a professional online presence. Feel free to reply to this email or call us at <strong>+91 [Your Contact Number]</strong> for a free consultation or to discuss your project requirements.</p>

    <p>Looking forward to hearing from you soon!</p>

    <p>Best Regards,<br>
    [Your Name]<br>
    Baaztechno<br>
    <a href="https://www.baaztechno.com">www.baaztechno.com</a><br>
    +91 [Your Contact Number]</p>
</body>
</html>
"""
    email_ids = read_email_ids(email_file_path)

    for email in email_ids:
        send_email(subject, body, email)

if __name__ == "__main__":
    main()
