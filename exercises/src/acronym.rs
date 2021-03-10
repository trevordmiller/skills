pub fn abbreviate(phrase: &str) -> String {
    if phrase.is_empty() {
        return phrase.to_string();
    }

    phrase
        .replace("_", "")
        .replace("-", " ")
        .split_whitespace()
        .map(|word| match word.chars().next() {
            Some(initial) => initial.to_uppercase().to_string(),
            None => "".to_string(),
        })
        .collect()
}
