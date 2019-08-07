<template>
  <div class="view-container">
    <div class="view-header">
      <h1>History</h1>
    </div>
    <div class="data-list history-data-list">
      <div v-for="(item, index) in dataItems" :key="index" class="data-item history-data-item">
        <!--
        <div class="history-type">{{ item.type }}</div>
        <div class="history-name">{{ item.name }}</div>
        <div class="history-videoID">{{ item.videoID }}</div>
        <div class="history-date">{{ item.date }}</div>
        <div class="history-description">{{ item.description }}</div>
        <div class="history-url">{{ item.url }}</div>
        <div class="history-thumbnail">{{ item.thumbnail }}</div>
        <div class="history-createdAt">{{ item.createdAt }}</div>
        <div class="history-updatedAt">{{ item.updatedAt }}</div>
        -->

      <div class='line-item-section-med'>
        <div class='history-type'>{{ item.type }}</div>
        <div class='history-name'>{{ item.name }} <hr /></div>

        <div class='author-container'>
          <img class='author-image' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' width='45px' height='45px'>
          <div class='author-text-container'>
            <span class='author-header'>Author</span>
            <br/>
            <span>AuthorName</span>
          </div>
        </div>

        <div class='tag-containter'>
          <div class='tag-item'>tag</div>
          <div class='tag-item'>tag</div>
          <div class='tag-item'>tag</div>
          <div class='tag-item'>tag</div>
          <div class='tag-item'>tag</div>
          <div class='tag-item'>tag</div>
        </div>
      </div>

      <div class='line-item-section-large'>
        <div class="history-petals"><Leaves /></div>
        <div class="history-date">{{ item.date }}</div>
        <div class="history-description">{{ item.description }}</div>
      </div>

      <div class='line-item-section-small'>
        <div class='flower-gen-container'>
          random flower gen?
        </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import Leaves from '@/components/Leaves.vue';

export default {
  name: 'History',
  components: {
    Leaves,
  },
  data() {
    return {
      dataItems: [],
    };
  },
  created() {
    fetch('http://kyojingames.com:3005/history')
      .then(n => n.json())
      .then((json) => {
        //  console.log(json);
        this.dataItems = json.map(n => n.attributes);
      });
  },
};
</script>

<style scoped>
  .data-item.history-data-item{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .line-item-section-large{
    flex:4;
  }
  .line-item-section-med{
    flex:2;
  }
  .line-item-section-small{
    flex:1;
  }

  .author-container{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .author-image{
    border-radius: 60px;
  }

  .author-header{
    color:grey;
  }

  .author-text-container{
    padding-left: 15px;
  }

  .tag-containter{
    display: -moz-grid;
    display: grid;
    grid-template-columns: auto auto auto;
  }

  .tag-item{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
    text-align: center;
    margin: 8px;
    padding: 8px;
    background: rgb(51, 51, 51);
    color: lightgrey;
    font-size: 1.3em
  }

  .flower-gen-container{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    flex-direction: column;
    text-align: center;
    height: 100%;
  }

  .history-type{
    color:grey;
  }

  .history-name{
    font-size: 2.3em;
  }

  .history-description{
    margin-top: 35px;
    font-size: 1.8em;
  }

  .history-petals{
    text-align: right;
  }

  .history-date{
    text-align: right;
  }

  ::v-deep .leaves{
    text-align: right;
    justify-content: flex-end;
    align-content: flex-end;
  }

  ::v-deep .leaf{
    width: 8px;
    height: 18px;
    margin: 2px 1px;
  }

  .data-item{
    border: none;
  }

  .data-item div{
    border: none;
  }
</style>
