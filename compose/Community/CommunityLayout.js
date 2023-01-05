import { Content } from "./Community.js"
import { Box } from "./Box.js";

export const Layout = ({ children }) => (
    <Box
        css={{
            maxW: "100%"
        }}
    >
        {children}
        <Content />
    </Box>
);