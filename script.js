/* ==========================================
CONTACT FORM
FORM SUBMIT
========================================== */

const contactForm =
    document.getElementById("contactForm");


const formStatus =
    document.getElementById("formStatus");


if (contactForm) {


    contactForm.addEventListener(

        "submit",

        async (event) => {


            event.preventDefault();


            if (formStatus) {

                formStatus.textContent =
                    "Sending your message...";

                formStatus.className =
                    "form-status sending";

            }


            const submitButton =
                contactForm.querySelector(
                    "button[type='submit']"
                );


            if (submitButton) {

                submitButton.disabled =
                    true;


                submitButton.innerHTML =

                    'Sending... ' +

                    '<i class="fa-solid fa-spinner fa-spin"></i>';

            }


            try {


                const formData =
                    new FormData(contactForm);


                const response =
                    await fetch(

                        contactForm.action,

                        {

                            method: "POST",

                            body: formData,

                            headers: {

                                "Accept":
                                    "application/json"

                            }

                        }

                    );


                if (response.ok) {


                    if (formStatus) {

                        formStatus.textContent =
                            "Message sent successfully!";

                        formStatus.className =
                            "form-status success";

                    }


                    contactForm.reset();


                    if (submitButton) {

                        submitButton.disabled =
                            false;


                        submitButton.innerHTML =

                            'Send Message ' +

                            '<i class="fa-solid fa-paper-plane"></i>';

                    }


                } else {


                    const data =
                        await response.json();


                    if (formStatus) {


                        if (

                            data.errors &&

                            data.errors.length > 0

                        ) {


                            formStatus.textContent =

                                data.errors

                                    .map(

                                        error =>

                                            error.message

                                    )

                                    .join(", ");


                        } else {


                            formStatus.textContent =

                                "Unable to send message.";

                        }


                        formStatus.className =
                            "form-status error";

                    }


                    if (submitButton) {

                        submitButton.disabled =
                            false;


                        submitButton.innerHTML =

                            'Send Message ' +

                            '<i class="fa-solid fa-paper-plane"></i>';

                    }

                }


            } catch (error) {


                console.error(

                    "Formspree Error:",

                    error

                );


                if (formStatus) {

                    formStatus.textContent =

                        "Network error. Please try again.";

                    formStatus.className =

                        "form-status error";

                }


                if (submitButton) {

                    submitButton.disabled =
                        false;


                    submitButton.innerHTML =

                        'Send Message ' +

                        '<i class="fa-solid fa-paper-plane"></i>';

                }

            }

        }

    );

}
