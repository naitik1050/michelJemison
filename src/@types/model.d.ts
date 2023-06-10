
type Sentence = {
    sentence: string,
    words: WordWithTimestamp[]
}

interface WordWithTimestamp extends Word{
    timestamp: string
}

interface Word {
    display: string,
    speak: string,
}


type UserDTO = {
    aacCount: number,
    email: string,
    firstname: string,
    lastname: string
}

type OpenAI_SuggestionsRequest = {
    subject: string,
    request: string

}
type OpenAI_SuggestionsResponse = {
    subject: string,
    response: string[]

}

type OpenAI_ImageResponse = {
    data: OpenAI_Image[];

}
type OpenAI_Image = {
    url: string,
    b64_json: string
}


