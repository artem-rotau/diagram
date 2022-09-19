
const tree = document.querySelector('.tree'),
      columns = document.querySelector('.columns'),
      oneColumn = document.querySelector('.one_column');



// HEADER LINKS
function subTitlesActive() {
    let subTitles = document.querySelectorAll('.subtitle');
    
    subTitles.forEach(item => {
        item.addEventListener('click', (e)=> {
            e.preventDefault();
            subTitles.forEach(subTitle => {
                e.target.classList.add('active');
                subTitle.classList.remove('active');
            });
        });
    })
}
subTitlesActive();


function activeNotActiveBlocks(item) {
    let verticalLine = document.querySelector('.vertical_line'),
        horizontalLine = document.querySelectorAll('.horizontal_line');

    item.addEventListener('click', ()=> {
        if (item.classList.contains('tree')) {
            verticalLine.classList.remove('line_not_active');
            horizontalLine.forEach(elem => {
                elem.classList.remove('line_not_active');
            });
            treeActive();
        } else if (item.classList.contains('columns')) {
            verticalLine.classList.add('line_not_active');
            horizontalLine.forEach(elem => {
                elem.classList.add('line_not_active');
            });
            columnsActive();
        } else {
            verticalLine.classList.add('line_not_active');
            horizontalLine.forEach(elem => {
                elem.classList.add('line_not_active');
            });
            oneColumnActive();
        }
    });
}
activeNotActiveBlocks(tree);
activeNotActiveBlocks(columns);
activeNotActiveBlocks(oneColumn);

let leftBlock = document.querySelector('.left_block'),
    innerBlock = document.querySelector('.inner_block'),

    descr_ta = document.querySelector('.descr_ta'),
    descr_ewt = document.querySelector('.descr_ewt'),
    descr_dsd = document.querySelector('.descr_dsd'),

    progress_ta = document.querySelector('.progress_ta'),
    progress_ewt = document.querySelector('.progress_ewt'),
    progress_dsd = document.querySelector('.progress_dsd'),

    middle_block = document.querySelector('.middle_block');

// TREE ACTIVE
function treeActive() {
    leftBlock.classList.remove('left_block_columns');
    
    innerBlock.classList.remove('inner_block_columns');
    innerBlock.classList.remove('inner_block_one_column');

    descr_ta.classList.remove('ta_position_one_column');
    descr_ta.classList.remove('ta_position_columns');
    descr_ewt.classList.remove('ewt_position_one_column');
    descr_ewt.classList.remove('ewt_position_columns');
    descr_dsd.classList.remove('dsd_position_one_column');
    descr_dsd.classList.remove('dsd_position_columns');

    progress_ta.classList.remove('progress_ta_one_column');
    progress_ta.classList.remove('progress_ta_columns');
    progress_ewt.classList.remove('progress_ewt_one_column');
    progress_ewt.classList.remove('progress_ewt_columns');
    progress_dsd.classList.remove('progress_dsd_one_column');
    progress_dsd.classList.remove('progress_dsd_columns');

}

// COLUMNS ACTIVE    
function columnsActive() {
    leftBlock.classList.add('left_block_columns');
    
    innerBlock.classList.add('inner_block_columns');
    innerBlock.classList.remove('inner_block_one_column');

    descr_ta.classList.add('ta_position_columns');
    descr_ta.classList.remove('ta_position_one_column');
    descr_ewt.classList.add('ewt_position_columns');
    descr_ewt.classList.remove('ewt_position_one_column');
    descr_dsd.classList.add('dsd_position_columns');
    descr_dsd.classList.remove('dsd_position_one_column');

    progress_ta.classList.add('progress_ta_columns');
    progress_ta.classList.remove('progress_ta_one_column');
    progress_ewt.classList.add('progress_ewt_columns');
    progress_ewt.classList.remove('progress_ewt_one_column');
    progress_dsd.classList.add('progress_dsd_columns');
    progress_dsd.classList.remove('progress_dsd_one_column');
}
    
// ONE COLUMN ACTIVE
function oneColumnActive() {
    leftBlock.classList.remove('left_block_columns');

    innerBlock.classList.remove('inner_block_columns');
    innerBlock.classList.add('inner_block_one_column');

    descr_ta.classList.remove('ta_position_columns');
    descr_ta.classList.add('ta_position_one_column');
    descr_ewt.classList.remove('ewt_position_columns');
    descr_ewt.classList.add('ewt_position_one_column');
    descr_dsd.classList.remove('dsd_position_columns');
    descr_dsd.classList.add('dsd_position_one_column');

    progress_ta.classList.remove('progress_ta_columns');
    progress_ta.classList.add('progress_ta_one_column');
    progress_ewt.classList.remove('progress_ewt_columns');
    progress_ewt.classList.add('progress_ewt_one_column');
    progress_dsd.classList.remove('progress_dsd_columns');
    progress_dsd.classList.add('progress_dsd_one_column');
}