import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import { formWrapper } from "./components/FormWrapper";
import { toggleButtonOptions } from "./services/constants";
import { AppScenesPaths } from "../../services/model/utils";
import { useGetUsersQuery } from "../../services/store/queries";
import { useMainButton } from "../../services/hooks/useMainButton";
import { useEventFormData } from "./services/hooks/useEventFormData";
import { TextFieldForm } from "../../components/FormFields/TextFieldForm";
import { TimePickerStyled } from "../../components/Styled/TimePickerStyled";
import { DatePickerForm } from "../../components/FormFields/DatePickerForm";
import { ToggleButtonGroupStyled } from "../../components/ToggleButtonGroup";
import { AutocompleteStyled } from "../../components/Styled/AutocompleteStyled";

import styles from "./EventForm.module.scss";
import { TimePickerForm } from "../../components/FormFields/TimePickerForm";

const EventForm: FC = () => {
  const navigate = useNavigate();

  const { data: users } = useGetUsersQuery();

  const { eventFormText, eventValue, onChangeEvent, processEvent } =
    useEventFormData();

  const [isPeriodic, setIsPeriodic] = useState(false);

  const setEvent = useCallback(() => {
    processEvent();
    navigate(AppScenesPaths.eventCalendar);
  }, [navigate, processEvent]);

  const { FakeMainButton } = useMainButton({
    text: eventFormText.button,
    cb: setEvent,
  });

  return (
    <div className={styles.container}>
      <Typography variant="h5" gutterBottom>
        {eventFormText.header}
      </Typography>

      <Card variant="outlined" className={styles.card}>
        <Box
          sx={{
            m: 1,
            p: 1,
            gap: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextFieldForm label="Наименование" name="title" />

          <TextFieldForm label="Ссылка" name="link" />

          <AutocompleteStyled
            options={users || []}
            getOptionLabel={(option) => option.name}
            getOptionKey={(option) => option.id}
            textFieldLabel="Участники"
            onChange={(_, val) => {
              onChangeEvent(
                "participants",
                val.map((item) => item.id)
              );
            }}
          />

          <DatePickerForm label="Дата" name="date" disablePast />

          <TimePickerForm label="Начало" name="start"   />

          <TimePickerForm label="Конец" name="end"  />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Периодическое"
              checked={isPeriodic}
              onChange={() => setIsPeriodic(!isPeriodic)}
            />
          </FormGroup>

          {isPeriodic && (
            <ToggleButtonGroupStyled
              options={toggleButtonOptions}
              value="once"
            />
          )}

          <TextFieldForm name="description" label="Описание" multiline />
        </Box>
      </Card>

      <FakeMainButton />
    </div>
  );
};

export default formWrapper(EventForm);
