export const mockFetchJSONResponse = (value: object) => {
    fetchMock.mockOnce(() => new Promise((resolve) => resolve(JSON.stringify(value))));
};

export const mockFetchTxtResponse = (value: string) => {
    fetchMock.mockOnce(() => new Promise((resolve) => resolve(value)));
};

export const mockFetchResponseWithError = (
    status: number,
    statusText?: string,
    bodyErrorMessage?: string
) => {
    fetchMock.mockOnce(
        () =>
            new Promise((resolve) =>
                resolve({
                    body: bodyErrorMessage,
                    init: {
                        status,
                        statusText,
                    },
                })
            )
    );
};

export const mockFetchResponseWithStatus = (status: number, statusText?: string) => {
    fetchMock.mockOnce(() => new Promise((resolve) => resolve({ init: { status, statusText } })));
};

export const mockFetchResponseWithTimeout = (value: object, timeout: number) => {
    fetchMock.mockOnce(
        () => new Promise((resolve) => setTimeout(() => resolve(JSON.stringify(value)), timeout))
    );
};

export const mockRejectResponse = (error: Error) => {
    fetchMock.mockOnce(() => new Promise((_, reject) => reject(error)));
};
