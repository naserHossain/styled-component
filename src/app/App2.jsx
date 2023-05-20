import React, { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";

const init = {
    title: "",
    bio: "",
    skills: "",
};

const init_2 = {
    title: {
        value: "",
        errors: "",
        focus: false,
    },
    bio: {
        value: "",
        errors: "",
        focus: false,
    },
    skills: {
        value: "",
        errors: "",
        focus: false,
    },
};

const App = () => {
    /*    const [values, setValues] = useState({ ...init });
    const [errors, setErrors] = useState({ ...init });
    const [focuses, setFocuses] = useState({
        title: false,
        bio: false,
        skills: false,
    }); */

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        const key = e.target.name;
        const { errors } = checkValidity(values);
        if (!errors[key]) {
            setErrors((prev) => ({
                ...prev,
                [key]: "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { isValid, errors } = checkValidity(values);
        if (isValid) {
            console.log(values);
            setErrors({ ...errors });
        } else {
            setErrors({ ...errors });
        }
    };

    const handleFocus = (e) => {
        setFocuses((prev) => ({
            ...prev,
            [e.target.name]: true,
        }));
    };

    const handleBlur = (e) => {
        const key = e.target.name;

        const { errors } = checkValidity(values);
        if (errors[key] && focuses[key] === true) {
            setErrors((prev) => ({
                ...prev,
                [key]: errors[key],
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                [key]: "",
            }));
        }
    };
    const checkValidity = (values) => {
        const errors = {};
        const { title, bio, skills } = values;
        if (!title) {
            errors.title = "invalid title";
        }
        if (!bio) {
            errors.bio = "invalid bio";
        }
        if (!skills) {
            errors.skills = "invalid skills";
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0,
        };
    };

    return (
        <div className="root">
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <InputGroup
                        value={values.title}
                        label={"Title: "}
                        name={"title"}
                        placeholder={"Software Engineer"}
                        onChange={handleChange}
                        error={errors.title}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={values.bio}
                        label={"Bio: "}
                        name={"bio"}
                        placeholder={"I am a software engineer..."}
                        onChange={handleChange}
                        error={errors.bio}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={values.skills}
                        label={"Skills: "}
                        name={"skills"}
                        placeholder={"Javascript, React"}
                        onChange={handleChange}
                        error={errors.skills}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <Button type="submit">submit</Button>
                </div>
            </form>
        </div>
    );
};

export default App;
