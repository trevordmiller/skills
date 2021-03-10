pub fn calculate_maxium_score(roll: Vec<usize>) -> usize {
    fn calculate_possible_score(roll: &[usize], number: usize) -> usize {
        let amount_of_number = roll.iter().filter(|dice| dice == &&number).count();

        amount_of_number * number
    }

    let possible_scores = vec![
        calculate_possible_score(&roll, 1),
        calculate_possible_score(&roll, 2),
        calculate_possible_score(&roll, 3),
        calculate_possible_score(&roll, 4),
        calculate_possible_score(&roll, 5),
        calculate_possible_score(&roll, 6),
    ];

    match possible_scores.iter().max() {
        Some(maximum_score) => *maximum_score,
        None => 0,
    }
}
