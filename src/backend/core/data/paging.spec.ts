import { Page, PageRequest, Sort } from './paging';
import { expect } from 'chai';

describe('data', () => {

  describe('Page', () => {
    let page: Page<string>;

    beforeEach(() => {
      const request = new PageRequest(2, 2);

      page = new Page(['five', 'size'], request, 11);
    });

    it('should have size', () => {
      expect(page.size).to.equal(2);
    });

    it('shouls have totalElements', () => {
      expect(page.totalElements).to.equal(11);
    });

    it('should have totalPages', () => {
      expect(page.totalPages).to.equal(6);
    });

    it('should have page number', () => {
      expect(page.number).to.equal(2);
    });

    it('should have next', () => {
      expect(page.hasNext).to.equal(true);
    });

    it('should have prev', () => {
      expect(page.hasPrev).to.equal(true);
    });

    it('should have correct next page request', () => {
      const request = page.next;
      expect(request.page).to.equal(3);
      expect(request.size).to.equal(2);
    });

    it('should have correct prev page request', () => {
      const request = page.prev;
      expect(request.page).to.equal(1);
      expect(request.size).to.equal(2);
    });

    it('should have first page request', () => {
      const request = page.first;
      expect(request.page).to.equal(0);
      expect(request.size).to.equal(2);
    });

    it('should have last page request', () => {
      const request = page.last;
      expect(request.page).to.equal(5);
      expect(request.size).to.equal(1);
    });

    it('should not have next', () => {
      const request = new PageRequest(6, 2);
      page = new Page(['ten'], request, 11);

      expect(page.hasNext).to.equal(false);
      expect(page.next).to.equal(null);
    });

    it('should not have prev', () => {
      const request = new PageRequest(0, 2);
      page = new Page(['one', 'two'], request, 11);

      expect(page.hasPrev).to.equal(false);
      expect(page.prev).to.equal(null);
    });
  });
});

