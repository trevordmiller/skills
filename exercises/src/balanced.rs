pub fn is_balanced(letters: &str) -> bool {
    let size = letters.chars().count();

    match size {
        0 => true,
        1 => false,
        _ => {
            let x_count = letters.chars().filter(|letter| letter.eq(&'x')).count();
            let y_count = letters.chars().filter(|letter| letter.eq(&'y')).count();

            x_count == y_count
        }
    }
}
