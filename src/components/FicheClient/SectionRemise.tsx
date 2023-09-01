import { Grid, OutlinedInput } from "@mui/material";
import { FormEvent } from "react";
import { Section, TitleSection } from ".";
import { BaseBtn } from "../Buttons";

const SectionRemise = () => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  const inputStyle = {
    input: {
      padding: "10px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "emerald.main",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "emerald.main",
    },
  };

  return (
    <Section span={"1/3"}>
      <TitleSection title="Remise de prix" />
      <Grid container item>
        <form
          action="POST"
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <Grid container direction={"column"} rowGap={1}>
            <Grid item>
              <label
                htmlFor="email"
                style={{ fontWeight: 500, paddingBottom: "6px" }}
              >
                Indiquer la remise à appliquer
              </label>
            </Grid>
            <Grid item>
              <OutlinedInput
                type="email"
                id="email"
                name="usrname"
                placeholder="000"
                sx={inputStyle}
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <BaseBtn btnName="Enregistrer" submit />
        </form>
      </Grid>
    </Section>
  );
};

export default SectionRemise;
