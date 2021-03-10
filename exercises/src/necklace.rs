pub fn is_same(letters: &str, variation: &str) -> bool {
    if letters.is_empty() {
        return true;
    }

    if letters.chars().count() != variation.chars().count() {
        return false;
    }

    let mut index = 0;
    let possible_variations: Vec<String> = letters
        .chars()
        .map(|_| {
            index += 1;
            let head = &letters[0..index];
            let tail = &letters[index..];
            format!("{}{}", tail, head)
        })
        .collect();

    possible_variations.contains(&variation.to_string())
}
