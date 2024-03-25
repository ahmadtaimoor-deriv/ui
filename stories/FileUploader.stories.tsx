import type { Meta, StoryObj } from "@storybook/react";

import { FileUploader } from "../src/components/Dropzone";

const meta: Meta<typeof FileUploader> = {
    title: "Components/FileUploader",
    component: FileUploader,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "FileUploader",
    render: () => (
        <div>
            <FileUploader errorMessage="error msg" hoverMessage="hover msg" value={[]} />
        </div>
    ),
};
