import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long").required("Required"),
});

const emptyValues = {
    id: "",
    name: "",
    number: ""
};

const ContactForm = ({ handleSubmit }) => {

    return <Formik initialValues={emptyValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="span" />
            <button type="submit">Add contact</button>
        </Form>
    </Formik>
};


export default ContactForm;