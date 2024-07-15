import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ViewData } from "../components";

test('renders default date and opens dropdown on button click', () => {
    const { getByText, queryByText } = render(<ViewData index={0} />);

    expect(getByText('24-Apr-2024')).toBeInTheDocument();
    const dateList = queryByText('02-May-2024');
    expect(dateList).toBeNull();

    const dropdownButton = getByText('24-Apr-2024');
    fireEvent.click(dropdownButton);

    const dateItem = getByText('02-May-2024');
    expect(dateItem).toBeInTheDocument();

    fireEvent.click(dateItem);

    expect(getByText('02-May-2024')).toBeInTheDocument();

    const closedDateItem = queryByText('09-May-2024');
    expect(closedDateItem).toBeNull();
  });